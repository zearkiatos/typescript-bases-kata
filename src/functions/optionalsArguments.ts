const fullName = (firstName: string, lastName?: string): string => {
    if (!firstName) {
        throw Error('The argument firstName is required');
    }
    return `${firstName} ${lastName || ''}`.trim();
};

export {
    fullName
}