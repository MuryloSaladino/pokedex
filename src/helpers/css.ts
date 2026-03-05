export function klass(...css: (string | Record<string, boolean> | undefined)[]) {
    const result: string[] = [];

    for (const style of css) {
        if (!style) continue;

        if (typeof style === 'string') {
            result.push(style);
        } else {
            for (const key in style) {
                if (style[key]) {
                    result.push(key);
                }
            }
        }
    }

    return result.join(' ');
}
