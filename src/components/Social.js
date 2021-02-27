import React from 'react'

import LinksList from './LinksList'

const Social = () => {
  const items = [
    {
      label: 'LinkedIn',
      url: "https://www.linkedin.com/in/aslm-chzm/"
    },
    {
      label: 'Email',
      url: "mailto:heinselm@icloud.com"
    },
    {
      label: 'Instagram',
      url: "https://www.instagram.com/anselm_chilz/"
    },
    {
      label: 'Twitter',
      url: "https://twitter.com/anselm_chilz"
    },
    {
      label: 'GitHub (code)',
      url: "https://github.com/aslm-chzm/"
    }
  ];

  return (
    <LinksList items={items}/>
  )
}

export default Social