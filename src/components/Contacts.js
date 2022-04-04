import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const post = ` 
# Hello world
## hotdog

testing react markdown fo life

- does this work?
  - does this work?

- does this work?

- does this work?

> does this work?

> does this work?

![test image](/assets/portfolio-picture.png)


\`\`\`
#include <stdio.h>

int main() {
	printf("Hello, World!");
	return 0;
}
\`\`\`
`;

export default function Contacts() {
  return (
    <StyledMarkdown>
      <ReactMarkdown>{ post }</ReactMarkdown>
    </StyledMarkdown>
  );
}


const StyledMarkdown = styled.main`
  h1, li {
  }
`;
