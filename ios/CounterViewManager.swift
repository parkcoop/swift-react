//
//  CounterViewManager.swift
//  swiftReact
//
//  Created by Parker Cooper on 11/12/20.
//

import Foundation


@objc(CounterViewManager)
class CounterViewManager: RCTViewManager {
  override func view() -> UIView! {
    return CounterView()
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }

  
  
  
  
}
