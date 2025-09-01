import { execSync } from 'child_process';
import moment from 'moment';

const ART_DATA = [
    {
        "x": 0,
        "y": 6,
        "commits": 10
    },
    {
        "x": 3,
        "y": 1,
        "commits": 6
    }
];
const YEAR = 2025;
const NO_FUTURE_COMMITS = true;

async function run() {
    console.log(`🚀 Starting ULTRA-FAST commit creation for ${YEAR}...`);

    const firstDay = moment({ year: YEAR }).startOf('year');
    const firstSunday = firstDay.clone().startOf('week');
    const now = moment();

    // Group commits by date for batching
    const commitsByDate = new Map();
    
    for (const point of ART_DATA) {
        const targetDate = firstSunday.clone()
            .add(point.x, 'weeks')
            .add(point.y, 'days');

        if (targetDate.year() !== YEAR) continue;
        if (NO_FUTURE_COMMITS && targetDate.isAfter(now)) continue;

        const dateKey = targetDate.format('YYYY-MM-DD');
        if (!commitsByDate.has(dateKey)) {
            commitsByDate.set(dateKey, { date: targetDate, count: 0 });
        }
        commitsByDate.get(dateKey).count += point.commits;
    }

    console.log(`📊 Processing ${commitsByDate.size} dates with batched commits...`);
    let totalCommits = 0;

    // Process each date with batch commits
    for (const [dateKey, { date, count }] of commitsByDate) {
        if (count === 0) continue;
        
        const isoDate = date.format('YYYY-MM-DDTHH:mm:ss');
        
        // Create all commits for this date in a single command
        let batchCommand = '';
        for (let i = 0; i < count; i++) {
            const commitTime = date.clone().add(i, 'minutes').format('YYYY-MM-DDTHH:mm:ss');
            batchCommand += `git commit --allow-empty -m "Art ${commitTime}" --date="${commitTime}" && `;
        }
        
        // Remove trailing ' && '
        batchCommand = batchCommand.slice(0, -4);
        
        // Execute batch command with proper environment
        execSync(batchCommand, {
            env: {
                ...process.env,
                GIT_AUTHOR_DATE: isoDate,
                GIT_COMMITTER_DATE: isoDate
            },
            stdio: 'ignore',
            shell: true
        });
        
        totalCommits += count;
        process.stdout.write(`✅ ${dateKey}: ${count} commits | `);
    }

    console.log(`\n\n🎉 ULTRA-FAST Complete: ${totalCommits} commits created!`);
    console.log("⬆️ Pushing to remote...");

    try {
        execSync("git push origin main", { stdio: 'inherit' });
        console.log("🚀 Push successful! Check your GitHub graph!");
    } catch (e) {
        console.error("❌ Push failed", e);
    }
}

run();
