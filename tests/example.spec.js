import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:3000';

test('renders elements', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const header = await page.$('Header');
  expect(header).toBeTruthy();

  const categories = await page.getByRole('Categories');
  expect(categories).toBeTruthy();

  const footer = await page.getByRole('Footer');
  expect(footer).toBeTruthy();
});



