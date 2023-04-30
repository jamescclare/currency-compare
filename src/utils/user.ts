const toInitials = (username: string) => {
    const [first, last] = username.split(" ");

    return `${first}${last ? " " : ""}${last}`;
};

export { toInitials };