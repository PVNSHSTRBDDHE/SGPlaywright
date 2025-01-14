const testdata=JSON.parse(JSON.stringify(require("../Testdata.json")))
class instaloginPage
{

constructor (page)
 {

this.page=page
this.usernameinput="//input[@name='username']"
this.passwordinput="//input[@type='password']"
this.loginbutton="//button[@type='submit']"

 }

async Logintoapplication(username, password )
{

await this.page.locator(this.usernameinput).fill(testdata.username)
await this.page.locator(this.passwordinput).fill(testdata.password)
await this.page.click(this.loginbutton)

}


}

module.exports=instaloginPage;