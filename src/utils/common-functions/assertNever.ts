export const assertNever = (value: unknown): never => {
    throw new Error(`Unhandled value in switch, value:${JSON.stringify(value)}`)
}