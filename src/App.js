import './App.css'
import StyledButton from './components/StyledButton/StyledButton'
import { SearchIcon } from './components/StyledIcons'
function App () {
  return (
    <div className='App'>
      <table className='table'>
        <tr>
          <th />
          <th>Primary</th>
          <th>Secondary</th>
          <th>Tertiary</th>
        </tr>
        <tr>
          <th>Regular</th>
          <td>
            <StyledButton text='Primary' primary />
          </td>
          <td>
            <StyledButton text='Secondary' secondary />
          </td>
          <td>
            <StyledButton text='Tertiary' tertiary />
          </td>
        </tr>
        <tr>
          <th>Large</th>
          <td>
            <StyledButton text='Primary' primary large />
          </td>
          <td>
            <StyledButton text='Secondary' secondary large />
          </td>
          <td>
            <StyledButton text='Tertiary' tertiary large />
          </td>
        </tr>
        <tr>
          <th>Small</th>
          <td>
            <StyledButton text='Primary' primary small />
          </td>
          <td>
            <StyledButton text='Secondary' secondary small />
          </td>
          <td>
            <StyledButton text='Tertiary' tertiary small />
          </td>
        </tr>
        <tr>
          <th>Round</th>
          <td>
            <StyledButton text='Primary' primary pill />
          </td>
          <td>
            <StyledButton text='Secondary' secondary pill />
          </td>
          <td>
            <StyledButton text='Tertiary' tertiary pill />
          </td>
        </tr>
        <tr>
          <th>Block</th>
          <td>
            <StyledButton text='Primary' primary fullWidth />
          </td>
          <td>
            <StyledButton text='Secondary' secondary fullWidth />
          </td>
          <td>
            <StyledButton text='Tertiary' tertiary fullWidth />
          </td>
        </tr>
        <tr>
          <th>Outlined</th>
          <td>
            <StyledButton text='Primary' primary outlined />
          </td>
          <td>
            <StyledButton text='Secondary' secondary outlined />
          </td>
          <td>
            <StyledButton text='Tertiary' tertiary outlined />
          </td>
        </tr>
        <tr>
          <th>Regular + Icon</th>
          <td>
            <StyledButton text='Primary' primary>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton text='Secondary' secondary>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton text='Tertiary' tertiary>
              <SearchIcon />
            </StyledButton>
          </td>
        </tr>
        <tr>
          <th>Large + Icon</th>
          <td>
            <StyledButton text='Primary' primary large>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton text='Secondary' secondary large>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton text='Tertiary' tertiary large>
              <SearchIcon />
            </StyledButton>
          </td>
        </tr>
        <tr>
          <th>Small + Icon</th>
          <td>
            <StyledButton text='Primary' primary small>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton text='Secondary' secondary small>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton text='Tertiary' tertiary small>
              <SearchIcon />
            </StyledButton>
          </td>
        </tr>
        <tr>
          <th>Round + Icon</th>
          <td>
            <StyledButton text='Primary' primary pill>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton text='Secondary' secondary pill>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton text='Tertiary' tertiary pill>
              <SearchIcon />
            </StyledButton>
          </td>
        </tr>
        <tr>
          <th>Block + Icon</th>
          <td>
            <StyledButton text='Primary' primary fullWidth>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton text='Secondary' secondary fullWidth>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton text='Tertiary' tertiary fullWidth>
              <SearchIcon />
            </StyledButton>
          </td>
        </tr>
        <tr>
          <th>Outlined + Icon</th>
          <td>
            <StyledButton text='Primary' primary outlined>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton text='Secondary' secondary outlined>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton text='Tertiary' tertiary outlined>
              <SearchIcon />
            </StyledButton>
          </td>
        </tr>
        <tr>
          <th>Icon Only</th>
          <td>
            <StyledButton primary>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton secondary>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton tertiary>
              <SearchIcon />
            </StyledButton>
          </td>
        </tr>
        <tr>
          <th>Icon Only Large</th>
          <td>
            <StyledButton primary large>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton secondary large>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton tertiary large>
              <SearchIcon />
            </StyledButton>
          </td>
        </tr>
        <tr>
          <th>Icon Only Small</th>
          <td>
            <StyledButton primary small>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton secondary small>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton tertiary small>
              <SearchIcon />
            </StyledButton>
          </td>
        </tr>
        <tr>
          <th>Round Icon Only</th>
          <td>
            <StyledButton primary pill>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton secondary pill>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton tertiary pill>
              <SearchIcon />
            </StyledButton>
          </td>
        </tr>
        <tr>
          <th>Round + Large Icon Only</th>
          <td>
            <StyledButton primary pill large>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton secondary pill large>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton tertiary pill large>
              <SearchIcon />
            </StyledButton>
          </td>
        </tr>
        <tr>
          <th>Round + Small Icon Only</th>
          <td>
            <StyledButton primary pill small>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton secondary pill small>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton tertiary pill small>
              <SearchIcon />
            </StyledButton>
          </td>
        </tr>
        <tr>
          <th>Round + block Icon Only</th>
          <td>
            <StyledButton primary pill fullWidth>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton secondary pill fullWidth>
              <SearchIcon />
            </StyledButton>
          </td>
          <td>
            <StyledButton tertiary pill fullWidth>
              <SearchIcon />
            </StyledButton>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default App
