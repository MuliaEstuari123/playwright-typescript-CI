
import { test, expect } from '@playwright/test';

let url1 = 'https://rakitan.com/simulasi-online.html';
let url2 = 'https://katalon-demo-cura.herokuapp.com/';
let username = 'John Doe';
let password = 'ThisIsNotAPassword';


test.skip ('child element', async ({ page }) => {

await page.goto(url1);

await expect(page.locator('img.w-100')).toBeVisible();

await page.locator("div.area-paddingx").getByRole('button', { name: 'Cari' }).click();


//await page.locator('div.area-paddingx').locator('div').nth(0)

});


test ('parent element', async ({ page }) => {

await page.goto(url2);

// await page.locator('div.text-vertical-center', { hasText: 'Make Appointment'}).getByRole('link', { name: 'Make Appointment'}).click();
// const objusername = page.locator('#txt-username');
// const objpassword = page.locator('#txt-password');
// await expect(objusername).toBeVisible();
// await objusername.fill(username);
// await expect(objpassword).toBeVisible();
// await (objpassword).fill(password);

const parentLogin = page.locator("//section[@id='login']//div[@class='row']")
const parentMakeAppointment = page.locator("div.text-vertical-center")

await parentMakeAppointment.getByRole('link', { name: 'Make Appointment' }).click();
await expect(parentLogin.locator('#txt-username')).toBeVisible();
await parentLogin.locator('#txt-username').fill(username);
await expect(parentLogin.locator('#txt-password')).toBeVisible();
await parentLogin.locator('#txt-password').fill(password);
await expect(page.locator('#btn-login')).toBeVisible();
await page.locator('#btn-login').click();


});







