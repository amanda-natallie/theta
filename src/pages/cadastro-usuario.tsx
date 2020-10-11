import { Grid } from '@material-ui/core'
import React from 'react'
import UserSignUpForm from '../components/forms/UserSignUpForm'
import { Title } from '../components/general/Typography'
import PlaySvgIcon from '../components/icons/PlaySvgIcon'
import PageWrapper from '../components/layout/PageWrapper'
import { IconButton } from '../styles/components/Button'
import { UserSignUpWrapper } from '../styles/pages/UserSIgnUp'
import theme from '../styles/theme'

const UserSignUpPage = () => {
  return (
    <PageWrapper noFooter>
        <UserSignUpWrapper>
          <Grid container>
            <Grid item md={5}></Grid>
            <Grid item md={7} className="form-wrapper">
              <header>
                <IconButton color="white" bg={theme.palette.primary.main} href="/">
                  <PlaySvgIcon width="16" height="19" />
                </IconButton>
              </header>
                
              <UserSignUpForm />
            </Grid>
          </Grid>
        </UserSignUpWrapper>
    </PageWrapper>
  )
}

export default UserSignUpPage
