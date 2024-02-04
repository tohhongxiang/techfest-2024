export default async function getAudioTranscription(id: string) {
    await new Promise(r => setTimeout(r, 500));

    return {
        "id": id,
        "transcription": `
        # Publication

        Publishing in StackEdit makes it simple for you to publish online your files. Once you're happy with a file, you can publish it to different hosting platforms like **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **WordPress** and **Zendesk**. With [Handlebars templates](http://handlebarsjs.com/), you have full control over what you export.
        
        > Before starting to publish, you must link an account in the **Publish** sub-menu.
        
        ## Publish a File
        
        You can publish your file by opening the **Publish** sub-menu and by clicking **Publish to**. For some locations, you can choose between the following formats:
        
        - Markdown: publish the Markdown text on a website that can interpret it (**GitHub** for instance),
        - HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).
        
        ## Update a publication
        
        After publishing, StackEdit keeps your file linked to that publication which makes it easy for you to re-publish it. Once you have modified your file and you want to update your publication, click on the **Publish now** button in the navigation bar.
        
        > **Note:** The **Publish now** button is disabled if your file has not been published yet.
        
        ## Manage file publication
        
        Since one file can be published to multiple locations, you can list and manage publish locations by clicking **File publication** in the **Publish** sub-menu. This allows you to list and remove publication locations that are linked to your file.
`
    }
}