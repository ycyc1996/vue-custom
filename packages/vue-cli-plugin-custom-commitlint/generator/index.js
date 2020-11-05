module.exports = (api, options) => {


  console.log('start')
  if (options.use) {
    console.info('add @vue-custom/vue-cli-plugin-custom-commitlint')

    api.onCreateComplete(() => {
      console.info('@vue-custom/vue-cli-plugin-custom-commitlint add complete!')
    })

    api.extendPackage({
      "devDependencies": {
        "@commitlint/cli": "^11.0.0",
        "@commitlint/config-conventional": "^11.0.0",
        "husky": "^4.3.0",
        "lint-staged": "^9.5.0",
      },
      "scripts": {
        "precommit": 'lint-staged'
      },
      "husky": {
        "hooks": {
          "pre-commit": "lint-staged",
          "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
        }
      },
      "lint-staged": {
        "*.{js,jsx,vue}": [
          "vue-cli-service lint",
          "git add"
        ]
      }
    })

    api.render('./template')

  } else {
    console.info('cancel add @vue-custom/vue-cli-plugin-custom-commitlint')
  }

}
