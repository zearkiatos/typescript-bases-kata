const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
    if (!firstName) {
        throw Error('The argument firstName is required');
    }

    const result = `${firstName} ${lastName || ''}`.trim();
    
    return upper ? result.toUpperCase() : result;
};

export {
    fullName
}