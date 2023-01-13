export const baseUrl = 'https://api.github.com/'

export const getUserDataParam = (userName: string): string => {
    return 'users/' + userName
}

export const getPopularReposParam = () => {
    return `search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories`
}
