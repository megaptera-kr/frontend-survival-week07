import { test, expect } from '@playwright/test';

test('Order cart item', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('link', { name: '식당 목록' })).toBeVisible();
  await expect(page.getByRole('link', { name: '장바구니' })).toBeVisible();

  const restaurantsLinkBtn = page.getByRole('link', { name: '식당 목록' });
  await restaurantsLinkBtn.click();

  await expect(page.getByRole('link', { name: '메가반점' })).toBeVisible();
  await expect(page.getByRole('link', { name: '메리김밥' })).toBeVisible();
  await expect(page.getByRole('link', { name: '혹등고래카레' })).toBeVisible();

  const restaurantDetailLinkBtn = page.getByRole('link', { name: '메가반점' });
  await restaurantDetailLinkBtn.click();

  await expect(page.getByText('짜장면(8,000)')).toBeVisible();
  await expect(page.getByText('짬뽕(8,000)')).toBeVisible();
  await expect(page.getByText('차돌짬뽕(9,000)')).toBeVisible();
  await expect(page.getByText('탕수육(14,000)')).toBeVisible();

  const addCartBtn = await page.waitForSelector('button[name="#짜장면"]');
  await addCartBtn.click();
  await addCartBtn.click();
  await addCartBtn.click();

  const cartLinkBtn = page.getByRole('link', { name: '장바구니' });
  await cartLinkBtn.click();

  await expect(page.getByText('짜장면(8,000)')).toBeVisible();
  await expect(page.getByText('* 3')).toBeVisible();
  await expect(page.getByText('합계: 24,000원 주문')).toBeVisible();

  const orderBtn = page.getByRole('button', { name: '주문하기' });
  await orderBtn.click();

  await expect(page.getByText('이대로 주문하시겠어요?')).toBeVisible();

  const paymentBtn = page.getByRole('button', { name: '결제' });
  await paymentBtn.click();

  await expect(page.getByText('주문 완료, 서둘러 배달가겠습니다!')).toBeVisible();

  await cartLinkBtn.click();

  await expect(page.getByText('합계: 0원 주문')).toBeVisible();
});
