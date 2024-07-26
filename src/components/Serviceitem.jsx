import { Add, ArrowDownRight, ArrowRight, Subtract } from '@carbon/icons-react';
import { useState } from 'react';

const Serviceitem = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=''>
      {data.map((item, index) => (
        <div className='xui-my-1'>
            <hr className='xui-bdr-w-1 xui-bdr-style-solid'/>
            <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-py-1 xui-flex-ai-center xui-cursor-pointer' key={index} onClick={() => toggleItem(index)}>
                <div>
                    <h3 className='xui-font-w-500 xui-font-w-500 xui-lg-font-sz-150 xui-font-sz-100 bold-font xui-m-none'>{item.question}</h3>
                </div>
                <div className='xui-d-flex xui-flex-ai-center xui-lg-mt-none xui-mt-1'>
                    <div style={{"width": "calc(100% - 50px)"}}>
                        <h3 className='xui-lg-font-sz-100 xui-font-sz-90'>{item.heading}</h3>
                    </div>
                    <div className='xui-w-50 xui-h-50 xui-d-flex xui-flex-jc-center xui-flex-ai-center'>
                        {activeIndex !== index &&
                            <ArrowRight size={20} color="currentColor" variant="Linear"/>
                    
                        }
                        {activeIndex === index &&
                            <ArrowDownRight size={20} color="currentColor" variant="Linear"/>
                        }
                    </div>
                    
                </div>
            </div>
            {activeIndex === index &&
                <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1'>
                    <div>
                        <img className='xui-mt-2 xui-lg-w-fluid-75 xui-w-fluid-100' src={item.image} alt="" />
                    </div>
                    <div className=''>
                        <p className='xui-opacity-6 xui-lg-font-sz-90 xui-font-sz-75 xui-w-fluid-100 xui-lg-w-fluid-90 xui-line-height-1-half'>{item.paragraph}</p>
                    </div>
                </div>
            }
        </div>
        
        // <div className='xui-mt-1-half xui-cursor-pointer' key={index} onClick={() => toggleItem(index)}>
        //   <div className={'xui-d-flex xui-flex-ai-center xui-mt-2 begorah-bg-blue-ii xui-py-1-half xui-px-1 xui-pos-relative ' + (activeIndex === index ? 'begorah-bg-blue-iii' : 'xui-bg-none')}>
        //     <p className='xui-lg-font-sz-120 xui-font-sz-90 ' style={{"width": "calc(100% - 20px)"}}>{item.question}</p>
        //     {activeIndex !== index &&
        //     <Add size={20} color="currentColor" variant="Linear"/>
            
        //     }
        //     {activeIndex === index &&
        //       <Subtract size={20} color="currentColor" variant="Linear"/>
        //     }
        
        //   </div>
        //   {activeIndex === index &&
        //    <div className='xui-px-1 xui-pb-1 begorah-bg-blue-iii xui-pos-relative'>
        //       <p className='xui-opacity-6 xui-lg-font-sz-90 xui-font-sz-75 xui-w-fluid-100 xui-lg-w-fluid-90 xui-line-height-1-half'>{item.answer}</p>
        //    </div>
        //    }
        // </div>
      ))}
    
    </div>
  );
};

export default Serviceitem;