file_data = File.open('./index.css').read

File.new('../frontend-react/src/index.css', 'w+')
File.new('../frontend-vue/src/index.css', 'w+')

File.write('../frontend-react/src/index.css', file_data)
File.write('../frontend-vue/src/index.css', file_data)
