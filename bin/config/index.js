/*
  @dest: 使用配置文件
  @Author: tree
 */
module.exports = {
	npmUrl: 'https://registry.npmjs.org/fast-react-cli',
	promptTypeList: [
		{
			type: 'list',
			message: 'Please select the template type to pull:',
			name: 'type',
			choices: [
				{
					name: 'fast-react-app@1.1.1',
					value: {
						url: 'https://github.com/maomincoding/fast-react-app.git',
						gitName: 'fast-react-app',
						val: 'fast-react-app',
					},
				},
			],
		},
	],
};
