from datetime import datetime

title = "The Life and Legacy of Cristiano Ronaldo"
now = datetime.now().strftime("%Y%m%d_%H%M%S")
file_name = title.replace(" ", "_").lower() + str(now)

print(file_name)