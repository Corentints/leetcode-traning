class TimeLimitedCache {
    
    #cacheMap: Map<number, {value: number, expiration: number}>;

    constructor() {
        this.#cacheMap = new Map();
    }
    
    set(key: number, value: number, duration: number): boolean {
        const expiration = new Date().getTime() + duration;
        const exists = this.#cacheMap.has(key);
        this.#cacheMap.set(key, { value, expiration });
        return exists;
    }

   get(key: number): number {
        const item = this.#cacheMap.get(key);

        if (!item || this.#isExpired(item)) {
            return -1;
        }

        return item.value;
    }   

    count(): number {
        let count = 0;

        for (let [, value] of this.#cacheMap) {
            if (!this.#isExpired(value)) {
                count++;
            }
        }

        return count;
    }

    #isExpired(item: {value: number, expiration: number}): boolean {
        return item.expiration < new Date().getTime();
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */