import { test, expect } from '@playwright/test';

test('Login to Cura', async ({ page }) => {

await page.goto('https://katalon-demo-cura.herokuapp.com/');

await page.click('#btn-make-appointment')

await page.fill('#txt-username', 'John Doe')
await page.fill('#txt-password', 'ThisIsNotAPassword')

await page.waitForTimeout(2000)

await page.locator('#btn-login'). click()

await page.waitForTimeout(2000)

await expect(page.locator('#combo_facility')).toBeVisible();

await page.locator('#combo_facility').selectOption('Hongkong CURA Healthcare Center')

await page.waitForTimeout(2000)


})











