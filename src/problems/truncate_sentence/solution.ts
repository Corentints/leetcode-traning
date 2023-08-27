function truncateSentence(s: string, k: number): string {
     return s.split(' ', k).join(' ');
};