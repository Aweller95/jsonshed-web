/** @jsx jsx */
import { jsx } from 'theme-ui'

import { SEO } from '../../../components/config'
import { Card } from '../../../components/surfaces'

export default function Contribute() {
  return (
    <section
      id="contribute"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SEO title="About" />
      <Card
        sx={{
          variant: 'cards.primary',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          textAlign: 'center',
          alignItems: 'center',
          p: [5, 6, 7],
        }}
      >
        <div>
          <h2
            sx={{
              variant: 'styles.h2',
              fontSize: [3, 3, 4],
            }}
          >
            How do I contribute?
          </h2>
        </div>
        <div>
          <ul
            sx={{
              listStyle: 'disc outside none',
              variant: 'text.body',
              fontSize: [1, 2, 3],
              mt: [3, 2, 3],
              ml: [2, 3, 4],
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <div>
              <li>
                <h3 sx={{ variant: 'styles.h3', fontSize: [1, 2, 3] }}>
                  STEP 1
                </h3>
                <ul>
                  <li>
                    Option 1: Fork the repo{' '}
                    <a
                      href="https://github.com/FranciscoMCG/jsonshed.git"
                      target="_blank"
                      rel="noreferrer"
                      sx={{
                        variant: 'styles.link',
                        textDecoration: 'none',
                        color: 'text',
                        fontWeight: 'bold',
                      }}
                    >
                      here
                    </a>
                  </li>
                  <li>
                    Option 2: Clone the repo{' '}
                    <a
                      href="https://github.com/FranciscoMCG/jsonshed.git"
                      target="_blank"
                      rel="noreferrer"
                      sx={{
                        variant: 'styles.link',
                        textDecoration: 'none',
                        color: 'text',
                        fontWeight: 'bold',
                      }}
                    >
                      here
                    </a>
                  </li>
                </ul>
              </li>
            </div>
            <div>
              <li>
                <h3
                  sx={{
                    variant: 'styles.h3',
                    fontSize: [1, 2, 3],
                    mt: [2, 3, 3],
                  }}
                >
                  STEP 2
                </h3>
                Write code you feel is going to add something to the project
              </li>
            </div>
            <div>
              <li>
                <h3
                  sx={{
                    variant: 'styles.h3',
                    fontSize: [1, 2, 3],
                    mt: [2, 3, 3],
                  }}
                >
                  STEP 3
                </h3>{' '}
                Create a new pull request using this{' '}
                <a
                  href="https://github.com/FranciscoMCG/jsonshed/compare"
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    variant: 'styles.link',
                    textDecoration: 'none',
                    color: 'text',
                    fontWeight: 'bold',
                  }}
                >
                  link
                </a>
              </li>
            </div>
          </ul>
        </div>
      </Card>
    </section>
  )
}
