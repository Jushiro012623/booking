import React from 'react';
const Loadable = (Component : any) => (props : any) =>
(
<React.Suspense 
fallback={
    <div>
        Loading...
    </div>}>
    <Component {...props} />
</React.Suspense>
);

export default Loadable;