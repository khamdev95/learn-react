# use State
Dữ liệu thay đổi
    input: initState
    output: state, setState
### Lưu ý
    - component sẽ được re-render lại sau khi `setState`
    - InitState chỉ được gọi lần đầu
    - set State với callback `setCounter(preState => preState + 1)`


# two-way binding


# useEffect
    - side effect: Có tác động làm thay đổi dữ liệu
    // 1. useEffect (callback)  
    // - Gọi Callback mỗi khi component re-render
    // - Gọi Callback sau khi component thêm element vào DOM
    // 2. useEffect (callback, [])
    // - Chỉ  gọi callback 1 lần sau khi component mounted
    // - Logic chạy 1 lần :))
    // 2. useEffect (callback, [deps])
    // - Callback sẽ được gọi lại mỗi khi deps thay đổi (Nhưng sau khi render xong)
    // 
    // ------------ Chung
    // 1. Callback luôn được gọi sau khi gọi component mounted
    
    // Cleanup function luôn được goi trước khi component unmoundted
    // Cleanup function luôn được gọi trước khi callback được gọi (trừ lần đầu)


# useLayoutEffect()
    useEffect
        1. Cập nhật lại state
        2. Cập nhật lại DOM (mutated)
        3. Render lại UI
        4. Gọi Cleanup nếu deps thay đổi
        5. Gọi useEffect callback
    
    useLayoutEffect
        1. Cập nhật lại state
        2. Cập nhật DOM (mutated)
        3. Gọi Cleanup nếu deps thay đổi (sync)
        4. Gọi useLayoutEffect callback (sync)
        5. Render lại UI


# useRef()
    dùng để giữ lại giá trị ở function cũ
    check curentValue, oldValue của state


# memo()
    // Hooks
    // HOC
    // Render Props
    Dùng để ghi nhớ lại props để không re-render lại component không mong muốn

    IO: là các props vào component sử dụng memo
        Check xem các props có sự thay đổi không.
            Có thì render lại
            Không thì không render lại

# useCallback()
    Tránh tạo ra các function mới không cần thiết
    Khi truyền function cho component con 
        Để tránh re-render không cần thiết thì cần sử dụng
            useCallback cho các function


# useMemo()
    Tránh thực hiện lại 1 function 
    - Sử dụng cho function
        nếu deps thay đổi thì mới gọi funtion

# useReducer
    // 1. Init state
    // 2. Actions
    // 3. Reducer
    // 4. Dispatch

# React Context & useContext Hook
    Dùng để truyền data từ component cha sang các component con
    // 1. Create context
    // 2. Provider
    // 3. Consumer
    - Có thể sử dụng nhiều createContext


# useReducer with useContext
    Tạo biến golbal