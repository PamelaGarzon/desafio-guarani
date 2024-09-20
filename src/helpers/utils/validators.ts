export const isFullNameValid = (fullName: string) => {
    const hasNameAndLastName = fullName.trim().split(' ');

    return hasNameAndLastName.length >= 2;
}