/**
 * For a list of durations in mm:ss format, print Total Duration in mm:ss format
    let durations = ["4:44", "10:29", "12:26", "7:53", "5:47", "3:30", "4:13", "8:30", "4:39", "1:55"]
    64:6
 */

// O(n)
function sumDurations(durations) {
    if(!durations || durations.length==0) return '0:00';
    let totalDurationInSecs=0;
    durations.forEach(duration => {
        const [durationMM, durationSS] = duration.split(":");
        totalDurationInSecs+=Number(durationMM*60)+Number(durationSS);
    })
    const minutes = parseInt(totalDurationInSecs/60);
    const seconds = totalDurationInSecs - (minutes*60);
    return minutes+":"+seconds;
}

// O(n) using array.prototype.reduce()
function sumDurations_Optimum(durations) {
    if(!durations || durations.length==0) return '0:00';
    const totalDurationInSecs = durations.reduce((sum,duration) => {
        const [durationMM, durationSS] = duration.split(":")
        return sum + Number(durationMM*60) + Number(durationSS);
    }, 0);
    const minutes = parseInt(totalDurationInSecs/60);
    const seconds = totalDurationInSecs - (minutes*60);
    return minutes+":"+seconds;
}