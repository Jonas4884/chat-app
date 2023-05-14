import {ElementType} from "react";

export type MainLayoutProps = {
  MainPanel: ElementType;
  LeftPanel?: ElementType;
  RightPanel?: ElementType;
};

export const MainLayout = ({MainPanel, RightPanel, LeftPanel}: MainLayoutProps) => {


  return (
    <div>
             {LeftPanel && (
        <div className="col-start-1 col-end-3">
                <div className="col-start-1 col-end-3">
                    <LeftPanel/>
                </div>
        </div>
      )}
      <div className="col-start-1 col-end-3">
      <div className="col-start-1 col-end-3"> <MainPanel /></div>
        </div>
      {RightPanel  && (
        <div className="col-start-1 col-end-3">
                <div className="col-end-7 col-span-2">
                    <RightPanel/>
                </div>
        </div>
        
      )}

    </div>
     
  );
};
