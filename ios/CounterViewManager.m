//
//  CounterViewManager.m
//  swiftReact
//
//  Created by Parker Cooper on 11/12/20.
//

#import <Foundation/Foundation.h>
#import "React/RCTViewManager.h"
@interface RCT_EXTERN_MODULE(CounterViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(count, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(onUpdate, RCTDirectEventBlock)


@end
