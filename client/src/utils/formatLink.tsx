export default function formatLink(link: string){
    const formattedLink = link.split("");
    formattedLink.shift();
    const firstLetter = formattedLink[0];
    formattedLink.shift()
    return `${firstLetter.toUpperCase()}${formattedLink.join("")}`
}
