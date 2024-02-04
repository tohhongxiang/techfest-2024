export default async function getVideoURL(id: string) {
    await new Promise(r => setTimeout(r, 1000));

    const links = [
        "https://www.youtube.com/watch?v=TjZBTDzGeGg&list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi",
        "https://www.youtube.com/watch?v=yHjj9fWTZdY",
        "https://www.youtube.com/watch?v=Unzc731iCUY",
        "https://www.youtube.com/watch?v=-z7hmAb2eqQ",
    ]
    return {
        id: id,
        url: links[Math.floor(Math.random() * links.length)]
    }
}