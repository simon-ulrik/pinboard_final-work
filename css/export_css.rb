fileData = File.open('./index.css').read

react_css = File.new('../frontend-react/src/index.css', 'w+')
vue_css = File.new('../frontend-vue/src/index.css', 'w+')

File.write('../frontend-react/src/index.css', fileData)
File.write('../frontend-vue/src/index.css', fileData)
