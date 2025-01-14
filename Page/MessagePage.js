//const {test}=require("@playwright/test");
const testdata=JSON.parse(JSON.stringify(require("../Testdata.json")))
class Messagepage{


    constructor (page)
{

this.page=page
this.Chathead="//span[contains(text(),'𝐕𝐚𝐢𝐛𝐡𝐚𝐯 𝐂𝐡𝐢𝐤𝐚𝐭𝐞 𝐉𝐚𝐢𝐧')]"
this.inboxchat="//div[@aria-label='Message']"


}


async MessageWritingToVaibs()
{ 
await this.page.click(this.Chathead)
await this.page.fill(this.inboxchat, testdata.Messagefromdatadriven)

}
}
module.exports=Messagepage;