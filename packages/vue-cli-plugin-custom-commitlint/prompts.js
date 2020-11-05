module.exports = pkg => {
  return [
    {
      name: `use`,
      type: 'confirm',
      message: '是否调用@vue-custom/vue-cli-plugin-custom-commitlint',
      default: true
    }
  ]
}
