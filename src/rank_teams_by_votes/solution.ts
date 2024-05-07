function rankTeams(votes: string[]): string {
    const ranking = new Map<string, number[]>()
    const lettersCount = votes[0].length;

    for (let i = 0; i < votes.length; i++) {
        for (let j = 0; j < lettersCount; j++) {
            const letter = votes[i][j];
            const letterRanking = ranking.get(letter) || new Array(lettersCount).fill(0);
            letterRanking[j]++;
            ranking.set(letter, letterRanking);
        }
    }

    const sortedVotes = [...ranking].sort((a, b) => {
        for (let i = 0; i < lettersCount; i++) {
            const aIndexValue = a[1][i];
            const bIndexValue = b[1][i];
            if (aIndexValue !== bIndexValue) {
                return aIndexValue > bIndexValue ? -1 : 1;
            }
        }

     
        return a[0] > b[0] ? 1 : -1;
    })

    return sortedVotes.map(vote => vote[0]).join('')
};