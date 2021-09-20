export const fetchCount = async (amount = 1) => {
    return new Promise<number>(
        (resolve, reject) => {
            if (!Number.isNaN(amount)) {
                setTimeout(() => resolve(amount), 500);
            } else {
                reject("not a number");
            }
        }
    );
};

// demonstrate how to get value from promise and handle error
// let value2: number;
// fetchCount().then(
//     (x: number) => {console.log(`succeeded: ${x}`); value2 = x;},
//     (error: string) => console.log(`failed: ${error}`)
// );

// const value = async () => {
//     let x = await fetchCount();
//     console.log(`fetched: ${x}`);
// }
// value();
