Dir.chdir('./frontend-react') do
  fork { exec('yarn start') }
end

Dir.chdir('./frontend-vue') do
  fork { exec('yarn serve') }
end
