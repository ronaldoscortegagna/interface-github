import React from 'react';
import Layout from './components/Layout';
import NoSearch from './components/no-search';
import Profile from './components/profile';
import Repositories from './components/repositories';
import useGithub from './hooks/github-hooks';

const App = () => {
  const { githubState } = useGithub();
  return (
    <main>
        <Layout>
          {githubState.hasUser ? (
            <>
              {githubState.loading ? (
                <p>Loading</p>
              ) : (
                <>
                  <Profile />        
                  <Repositories />
                </>
              )}
            </>
          ) : (
            <NoSearch />
          )}
        </Layout>
    </main>
  );
};

export default App;