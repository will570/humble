from selenium import webdriver
from selenium.webdriver.common.by import By
import requests
import io
from PIL import Image
import time
import names
import pandas as pd

PATH = "/Users/belle/Desktop/chromedriver"

wd = webdriver.Chrome(PATH)

def get_images_from_google(wd, delay, max_images):
	def scroll_down(wd):
		wd.execute_script("window.scrollTo(0, document.body.scrollHeight);")
		time.sleep(delay)

	url = "https://www.google.com/search?q=famous+people&tbm=isch&ved=2ahUKEwjn9uDZkpr3AhUaAjQIHZpUDSIQ2-cCegQIABAA&oq=famous+people&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECAAQQ1CQB1iqEmCnE2gAcAB4AIAB5wGIAZ8LkgEFNi41LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=NohbYueDOZqE0PEPmqm1kAI&bih=622&biw=1316&rlz=1C5CHFA_enHK929HK930#imgrc=nUozg7xxKlE56M"
	wd.get(url)

	image_urls = set()
	skips = 0

	while len(image_urls) + skips < max_images:
		scroll_down(wd)
		thumbnails = wd.find_elements(By.CLASS_NAME, "Q4LuWd")

		for img in thumbnails[len(image_urls) + skips:max_images]:
			try:
				img.click()
				time.sleep(delay)
			except:
				continue

			images = wd.find_elements(By.CLASS_NAME, "n3VNCb")

			for image in images:
				if image.get_attribute('src') in image_urls:
					max_images += 1
					skips += 1
					break

				if image.get_attribute('src') and 'http' in image.get_attribute('src'):
					image_urls.add(image.get_attribute('src'))
					print(f"Found {len(image_urls)}")

	return image_urls

urls = get_images_from_google(wd, 1, 50)
print(urls)
wd.quit()

random_name_set = {names.get_full_name() for i in range(50)}


df2 = pd.DataFrame(urls)
df1 = pd.DataFrame(random_name_set)

final = pd.concat([df1, df2], axis = 1)
print(final)
# export to csv and without index
final.to_csv('final.csv', index = False)
