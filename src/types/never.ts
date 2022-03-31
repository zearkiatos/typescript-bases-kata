const fakeError = (message: string):never => {
    throw new Error(message);
};

export { fakeError };