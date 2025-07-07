export const sxMain = {
  backgroundColor: 'white',
  width: '40%',
  margin: '0 auto',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)',
  '@media (max-width: 830px)': {
    width: '100%'
  }
}

export const sxHeader = {
  '& h1': {
    margin: '20px auto 10px auto',
    justifyContent: 'center',
    fontSize: '96px',
    fontWeight: 350,
    textAlign: 'center',
    color: 'rgba(175, 47, 47, 0.15)',
  }
}