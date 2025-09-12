import { StyleSheet } from 'react-native'; 

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom: 50,
    justifyContent: 'space-between',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingBottom: 50,
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,  
    position: 'relative',
  },

  title: {
    fontSize: 20,     
    fontWeight: 'bold',   
    color: '#000',    
    marginBottom: 10, 
  }, 
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E874B',
    marginBottom: 4,
    marginTop: 10,
  },
  required: {
    color: 'red',
  },
  mColor: {
    color: '#1E874B'
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1, 
    borderBottomColor: '#1E874B',
    color: 'red',
  },
  button: {
    backgroundColor: '#1E874B',
    borderRadius: 100,
    paddingVertical: 8, 
    marginBottom: 50,
    color: '#ffffff',
  },
  buttonNum: {
    backgroundColor: '#1E874B',
    borderRadius: 100,
    paddingVertical: 8, 
    marginBottom: 50,
    color: '#ffffff',
  },
  buttonLabel: {
    color: '#ffffff',
    fontSize: 16,
  },
  buttonLabel2: {
    color: '#1E874B',
    fontSize: 16,
  },
  card: {
    borderRadius: 16,
    elevation: 3,
    backgroundColor: '#fff',
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  view: {
     
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginTop: 40,
  },
  viewBell: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: 'red',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  buttonLabel1: {
    fontSize: 16, 
    fontWeight: "bold", 
    color: "#FFFFFF"
  },
  buttonLabel2: {
    fontSize: 16, 
    fontWeight: "bold", 
    color: "#1E874B",
  },
  TextMal: {
    fontSize: 12, 
    color: '#888', 
    marginTop: 4, 
    textAlign: 'center',
  },
  BtnUpload: {
    width: '100%',                
    borderColor: '#1E874B',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dashed',
    paddingVertical: 10,
  },
  ImgBank: {
    width: '100%', 
    height: 300, 
    marginRight: 16, 
    alignSelf: 'center',  
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10
  },
  TextBankDes: {
    fontSize: 12, 
    color: '#555', 
    marginBottom: 4
  },
  BgWhite: {
    backgroundColor: '#fff',
    color: "#1E874B",
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  dayBlock: {
    marginBottom: 16,
    borderBottomWidth: 0.5,
    borderColor: "#000",
    paddingBottom: 10,
    color: '#000', 
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dayText: {
    fontSize: 16,
    fontWeight: "600",
    color: '#000', 
  },
  closeText: {
    fontSize: 14, 
    color: '#000', 
  },
  slotRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    color: '#000', 
  },
  timeButton: {
    borderRadius: 10,
    minWidth: 90,
  },
  addBtn: {
    alignSelf: "flex-start",
    marginTop: 6,
    color: '#000',  
  },
  saveButton: {
    marginTop: 20,
    borderRadius: 30,
    paddingVertical: 8,
  },
});

