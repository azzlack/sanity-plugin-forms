import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import groq from 'groq'
import {client} from '../client'

type Props = {
  onSelect?: (id: string) => void
}

const ListItem = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`

const ListItemLink = styled.a`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0.5rem 1rem;
  text-decoration: none;
  outline: none;
  height: 2.5em;

  &:hover {
    background-color: #f1f3f6;
    color: #262f3d;
  }

  &.selected {
    background-color: #2276fc !important;
    color: rgb(255, 255, 255) !important;
  }

  h2 {
    font-size: 1rem;
    line-height: 1.25;
    font-weight: 400;
    text-transform: none;
    padding: 0;
    margin: 0;
  }
`

const ListForms: React.FC<Props> = ({onSelect}) => {
  const [forms, setForms] = useState([])

  const query = groq`*[_type in ["forms.form"] && !(_id in path("drafts.**"))]`
  useEffect(() => {
    client.fetch(query).then((r) => {
      setForms(r)
    })
  }, [forms])

  const onFormSelected = (form, e) => {
    if (onSelect) {
      onSelect(form)
    }
  }

  return (
    <>
      {forms.map((f) => {
        return (
          <ListItem>
            <ListItemLink onClick={(e) => onFormSelected(f, e)}>
              <h2>{f.name.current}</h2>
            </ListItemLink>
          </ListItem>
        )
      })}
    </>
  )
}

export default ListForms
