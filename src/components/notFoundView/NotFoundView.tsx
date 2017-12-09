import * as React from 'react';

class NotFoundView extends React.Component {
    render() {
      return (
        <div className="http-404">
          <h2 className="text-info">功能尚未开发完毕</h2>
          <h3 className="text-danger">Page not found</h3>
        </div>
      );
    }
}

export default NotFoundView;