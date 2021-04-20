/*
  @dest: 使用配置文件
  @Author: tree
 */
module.exports = {
  npmUrl: "https://registry.npmjs.org/fast-react-cli",
  promptTypeList: [
    {
      type: "list",
      message: "Please select the template type to pull:",
      name: "type",
      choices: [
        {
          name: "parcel-vue-app",
          value: {
            url: "https://github.com/maomincoding/fast-react-app.git",
            gitName: "parcel-vue-app",
            val: "parcel-vue-app",
          },
        },
      ],
    },
  ],
};
