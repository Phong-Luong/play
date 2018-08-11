import styled from 'react-emotion';
export default styled('div')(({ theme }) =>
  theme.styleguide.mq({
    margin: '0px auto',
    width: ['100%', null, '728px', '984px', '1180px']
  })
);
