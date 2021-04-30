const headingRequest =
    {title: 'This Is A Heading',
    header: '3'}

const headingGenerator = ({ title, header }) => (
    `<h${header}>${title}</h${header}>`
)

console.log(headingGenerator(headingRequest))