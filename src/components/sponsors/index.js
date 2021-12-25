import React from 'react';

const logoStyles = {
  height: '150px',
  width: 'auto',
};

export default () => (
  <>
    <div
      style={{
        // borderTop: '1px solid #eaeaef',
        margin: '3em 0',
        // padding: '3em 0',
        paddingBottom: '',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '30px auto',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '30px',
              marginBottom: '30px',
              textAlign: 'center',
              marginTop: '30px',
            }}
          >
            Powered by
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
              maxWidth: '500px',
              width: '100%',
              padding: '0 15px',
            }}
          >
            <img
              alt="Ivy Achievement"
              src="https://images-ext-2.discordapp.net/external/QD9Ylgd2jn7TloqMDT1JxOTl6S3L0OylGqqOb1RhHa0/https/exunclan.com/static/ivyachievement-439bfed6b2f70583cfef86d72743daa8.png"
              style={{ height: 'auto', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  </>
);
