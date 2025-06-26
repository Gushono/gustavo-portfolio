import React, { useState, useEffect } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Cpu, Code2, Zap } from 'lucide-react';
import { SiPython, SiGo } from 'react-icons/si';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-go';
import 'prismjs/themes/prism-tomorrow.css';
import '../styles/CodeSnippets.css';

const CodeSnippetsSection = () => {
  const [activeTab, setActiveTab] = useState('two-sum');
  const [copied, setCopied] = useState({});

  useEffect(() => {
    // Highlight code when component mounts or when language changes
    Prism.highlightAll();
  }, [activeTab]);

  const handleCopy = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(prev => ({ ...prev, [id]: true }));
      setTimeout(() => setCopied(prev => ({ ...prev, [id]: false })), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const getLanguageClass = (language) => {
    switch (language.toLowerCase()) {
      case 'python':
        return 'language-python';
      case 'go':
        return 'language-go';
      default:
        return 'language-plaintext';
    }
  };

  const codeExamples = {
    'two-sum': {
      title: 'Two Sum Algorithm',
      description: 'Efficient solution using HashMap',
      snippets: {
        python: {
          title: 'two_sum.py',
          language: 'Python',
          icon: <SiPython className="text-blue-500" />,
          color: 'from-blue-500 to-blue-700',
          textColor: 'text-blue-600',
          bgColor: 'bg-blue-50',
          code: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Example usage
nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
print("Indices:", result)  # Output: [0, 1]`
        },
        golang: {
          title: 'two_sum.go',
          language: 'Go',
          icon: <SiGo className="text-cyan-500" />,
          color: 'from-cyan-500 to-cyan-700',
          textColor: 'text-cyan-600',
          bgColor: 'bg-cyan-50',
          code: `package main

import "fmt"

func twoSum(nums []int, target int) []int {
    seen := make(map[int]int)
    
    for i, num := range nums {
        complement := target - num
        if j, exists := seen[complement]; exists {
            return []int{j, i}
        }
        seen[num] = i
    }
    return []int{}
}

func main() {
    nums := []int{2, 7, 11, 15}
    target := 9
    result := twoSum(nums, target)
    fmt.Printf("Indices: %v\\n", result)
}`
        }
      }
    },
    'strategy': {
      title: 'Strategy Pattern',
      description: 'Payment processing with different strategies',
      snippets: {
        python: {
          title: 'strategy_pattern.py',
          language: 'Python',
          icon: <SiPython className="text-blue-500" />,
          color: 'from-blue-500 to-blue-700',
          textColor: 'text-blue-600',
          bgColor: 'bg-blue-50',
          code: `from abc import ABC, abstractmethod
from typing import List

# Strategy Interface
class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount: float) -> str:
        pass

# Concrete Strategies
class CreditCardPayment(PaymentStrategy):
    def __init__(self, card_number: str):
        self.card_number = card_number
    
    def pay(self, amount: float) -> str:
        return "Paid $%.2f using Credit Card ending in %s" % (amount, self.card_number[-4:])

class PayPalPayment(PaymentStrategy):
    def __init__(self, email: str):
        self.email = email
    
    def pay(self, amount: float) -> str:
        return "Paid $%.2f using PayPal account %s" % (amount, self.email)

class CryptoPayment(PaymentStrategy):
    def __init__(self, wallet_address: str):
        self.wallet_address = wallet_address
    
    def pay(self, amount: float) -> str:
        return "Paid $%.2f using Crypto wallet %s..." % (amount, self.wallet_address[:8])

# Context
class ShoppingCart:
    def __init__(self):
        self.items: List[dict] = []
        self.payment_strategy: PaymentStrategy = None
    
    def add_item(self, item: dict):
        self.items.append(item)
    
    def set_payment_strategy(self, strategy: PaymentStrategy):
        self.payment_strategy = strategy
    
    def checkout(self) -> str:
        if not self.payment_strategy:
            raise ValueError("Payment strategy not set")
        
        total = sum(item['price'] for item in self.items)
        return self.payment_strategy.pay(total)

# Usage Example
if __name__ == "__main__":
    cart = ShoppingCart()
    cart.add_item({"name": "Laptop", "price": 999.99})
    cart.add_item({"name": "Mouse", "price": 29.99})
    
    # Use different payment strategies
    cart.set_payment_strategy(CreditCardPayment("1234-5678-9012-3456"))
    print(cart.checkout())
    
    cart.set_payment_strategy(PayPalPayment("user@example.com"))
    print(cart.checkout())`
        },
        golang: {
          title: 'strategy_pattern.go',
          language: 'Go',
          icon: <SiGo className="text-cyan-500" />,
          color: 'from-cyan-500 to-cyan-700',
          textColor: 'text-cyan-600',
          bgColor: 'bg-cyan-50',
          code: `package main

import "fmt"

type PaymentStrategy interface {
    Pay(amount float64) string
}

type CreditCardPayment struct {
    cardNumber string
}

func (c *CreditCardPayment) Pay(amount float64) string {
    return fmt.Sprintf("Paid $%.2f using Credit Card ending in %s", amount, c.cardNumber[len(c.cardNumber)-4:])
}

type PayPalPayment struct {
    email string
}

func (p *PayPalPayment) Pay(amount float64) string {
    return fmt.Sprintf("Paid $%.2f using PayPal account %s", amount, p.email)
}

type ShoppingCart struct {
    items            []Item
    paymentStrategy  PaymentStrategy
}

type Item struct {
    name  string
    price float64
}

func (s *ShoppingCart) AddItem(item Item) {
    s.items = append(s.items, item)
}

func (s *ShoppingCart) SetPaymentStrategy(strategy PaymentStrategy) {
    s.paymentStrategy = strategy
}

func (s *ShoppingCart) Checkout() (string, error) {
    if s.paymentStrategy == nil {
        return "", fmt.Errorf("payment strategy not set")
    }
    
    var total float64
    for _, item := range s.items {
        total += item.price
    }
    
    return s.paymentStrategy.Pay(total), nil
}

func main() {
    cart := &ShoppingCart{}
    cart.AddItem(Item{name: "Laptop", price: 999.99})
    cart.AddItem(Item{name: "Mouse", price: 29.99})
    
    cart.SetPaymentStrategy(&CreditCardPayment{cardNumber: "1234-5678-9012-3456"})
    if result, err := cart.Checkout(); err == nil {
        fmt.Println(result)
    }
    
    cart.SetPaymentStrategy(&PayPalPayment{email: "user@example.com"})
    if result, err := cart.Checkout(); err == nil {
        fmt.Println(result)
    }
}`
        }
      }
    },
    'factory': {
      title: 'Factory Pattern',
      description: 'Database connection factory',
      snippets: {
        python: {
          title: 'factory_pattern.py',
          language: 'Python',
          icon: <SiPython className="text-blue-500" />,
          color: 'from-blue-500 to-blue-700',
          textColor: 'text-blue-600',
          bgColor: 'bg-blue-50',
          code: `from abc import ABC, abstractmethod
from typing import Dict, Any

# Product Interface
class Database(ABC):
    @abstractmethod
    def connect(self) -> str:
        pass
    
    @abstractmethod
    def execute(self, query: str) -> str:
        pass

# Concrete Products
class PostgreSQL(Database):
    def __init__(self, host: str, port: int, database: str):
        self.host = host
        self.port = port
        self.database = database
    
    def connect(self) -> str:
        return "Connected to PostgreSQL at %s:%d/%s" % (self.host, self.port, self.database)
    
    def execute(self, query: str) -> str:
        return "PostgreSQL executing: %s" % query

class MySQL(Database):
    def __init__(self, host: str, port: int, database: str):
        self.host = host
        self.port = port
        self.database = database
    
    def connect(self) -> str:
        return "Connected to MySQL at %s:%d/%s" % (self.host, self.port, self.database)
    
    def execute(self, query: str) -> str:
        return "MySQL executing: %s" % query

class MongoDB(Database):
    def __init__(self, host: str, port: int, database: str):
        self.host = host
        self.port = port
        self.database = database
    
    def connect(self) -> str:
        return "Connected to MongoDB at %s:%d/%s" % (self.host, self.port, self.database)
    
    def execute(self, query: str) -> str:
        return "MongoDB executing: %s" % query

# Factory
def create_database(db_type: str) -> Database:
    if db_type.lower() == "postgresql":
        return PostgreSQL("localhost", 5432, "test")
    elif db_type.lower() == "mysql":
        return MySQL("localhost", 3306, "test")
    elif db_type.lower() == "mongodb":
        return MongoDB("localhost", 27017, "test")
    else:
        raise ValueError("Unsupported database type: %s" % db_type)

# Usage Example
if __name__ == "__main__":
    databases = ["postgresql", "mysql", "mongodb"]
    
    for db_type in databases:
        try:
            db = create_database(db_type)
            print(db.connect())
            print(db.execute("SELECT * FROM users"))
            print()
        except ValueError as e:
            print(e)`
        },
        golang: {
          title: 'factory_pattern.go',
          language: 'Go',
          icon: <SiGo className="text-cyan-500" />,
          color: 'from-cyan-500 to-cyan-700',
          textColor: 'text-cyan-600',
          bgColor: 'bg-cyan-50',
          code: `package main

import "fmt"

type Database interface {
    Connect() string
    Execute(query string) string
}

type PostgreSQL struct {
    host     string
    port     int
    database string
}

func (p *PostgreSQL) Connect() string {
    return fmt.Sprintf("Connected to PostgreSQL at %s:%d/%s", p.host, p.port, p.database)
}

func (p *PostgreSQL) Execute(query string) string {
    return fmt.Sprintf("PostgreSQL executing: %s", query)
}

type MySQL struct {
    host     string
    port     int
    database string
}

func (m *MySQL) Connect() string {
    return fmt.Sprintf("Connected to MySQL at %s:%d/%s", m.host, m.port, m.database)
}

func (m *MySQL) Execute(query string) string {
    return fmt.Sprintf("MySQL executing: %s", query)
}

type MongoDB struct {
    host     string
    port     int
    database string
}

func (m *MongoDB) Connect() string {
    return fmt.Sprintf("Connected to MongoDB at %s:%d/%s", m.host, m.port, m.database)
}

func (m *MongoDB) Execute(query string) string {
    return fmt.Sprintf("MongoDB executing: %s", query)
}

func CreateDatabase(dbType string) (Database, error) {
    switch dbType {
    case "postgresql":
        return &PostgreSQL{host: "localhost", port: 5432, database: "test"}, nil
    case "mysql":
        return &MySQL{host: "localhost", port: 3306, database: "test"}, nil
    case "mongodb":
        return &MongoDB{host: "localhost", port: 27017, database: "test"}, nil
    default:
        return nil, fmt.Errorf("unsupported database type: %s", dbType)
    }
}

func main() {
    databases := []string{"postgresql", "mysql", "mongodb"}
    
    for _, dbType := range databases {
        db, err := CreateDatabase(dbType)
        if err != nil {
            fmt.Println(err)
            continue
        }
        
        fmt.Println(db.Connect())
        fmt.Println(db.Execute("SELECT * FROM users"))
        fmt.Println()
    }
}`
        }
      }
    },
    'concurrency': {
      title: 'Concurrency: Go vs Python',
      description: 'Comparing goroutines vs threads',
      snippets: {
        python: {
          title: 'concurrency_comparison.py',
          language: 'Python',
          icon: <SiPython className="text-blue-500" />,
          color: 'from-blue-500 to-blue-700',
          textColor: 'text-blue-600',
          bgColor: 'bg-blue-50',
          code: `import threading
import time
import queue
from concurrent.futures import ThreadPoolExecutor

def worker(worker_id):
    print("Worker %d starting" % worker_id)
    time.sleep(1)
    print("Worker %d done" % worker_id)

def process_with_threads(count):
    threads = []
    print("Starting %d threads..." % count)
    
    start_time = time.time()
    
    for i in range(count):
        thread = threading.Thread(target=worker, args=(i,))
        threads.append(thread)
        thread.start()
    
    for thread in threads:
        thread.join()
    
    duration = time.time() - start_time
    print("All threads completed in %.2f seconds" % duration)

def producer(q):
    for i in range(5):
        q.put("Message %d" % i)
        time.sleep(0.1)
    q.put(None)  # Sentinel value

def consumer(q):
    print("Receiving messages:")
    while True:
        msg = q.get()
        if msg is None:
            break
        print("Received: %s" % msg)

def queue_example():
    q = queue.Queue()
    
    producer_thread = threading.Thread(target=producer, args=(q,))
    consumer_thread = threading.Thread(target=consumer, args=(q,))
    
    producer_thread.start()
    consumer_thread.start()
    
    producer_thread.join()
    consumer_thread.join()

class Counter:
    def __init__(self):
        self.count = 0
        self.lock = threading.Lock()
    
    def increment(self):
        with self.lock:
            self.count += 1
    
    def get_count(self):
        with self.lock:
            return self.count

def lock_example():
    counter = Counter()
    threads = []
    
    for _ in range(10):
        thread = threading.Thread(target=lambda: [counter.increment() for _ in range(1000)])
        threads.append(thread)
        thread.start()
    
    for thread in threads:
        thread.join()
    
    print("Final count: %d" % counter.get_count())

def task(task_id):
    print("Task %d starting" % task_id)
    time.sleep(0.5)
    print("Task %d completed" % task_id)
    return "Result from task %d" % task_id

def thread_pool_example():
    print("Using ThreadPoolExecutor:")
    with ThreadPoolExecutor(max_workers=4) as executor:
        futures = [executor.submit(task, i) for i in range(8)]
        results = [future.result() for future in futures]
    
    print("Results:")
    for result in results:
        print(result)

if __name__ == "__main__":
    print("=== Python Threading Examples ===")
    
    # Thread example
    process_with_threads(5)
    print()
    
    # Queue example
    queue_example()
    print()
    
    # Lock example
    lock_example()
    print()
    
    # ThreadPoolExecutor example
    thread_pool_example()`
        },
        golang: {
          title: 'concurrency_comparison.go',
          language: 'Go',
          icon: <SiGo className="text-cyan-500" />,
          color: 'from-cyan-500 to-cyan-700',
          textColor: 'text-cyan-600',
          bgColor: 'bg-cyan-50',
          code: `package main

import (
    "fmt"
    "sync"
    "time"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Printf("Worker %d starting\\n", id)
    time.Sleep(time.Second)
    fmt.Printf("Worker %d done\\n", id)
}

func processWithGoroutines(count int) {
    var wg sync.WaitGroup
    fmt.Printf("Starting %d goroutines...\\n", count)
    
    start := time.Now()
    
    for i := 0; i < count; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }
    
    wg.Wait()
    duration := time.Since(start)
    fmt.Printf("All goroutines completed in %.2f seconds\\n", duration)
}

func producer(ch chan<- string, wg *sync.WaitGroup) {
    defer wg.Done()
    for i := 0; i < 5; i++ {
        ch <- fmt.Sprintf("Message %d", i)
        time.Sleep(100 * time.Millisecond)
    }
    close(ch)
}

func consumer(ch <-chan string, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Println("Receiving messages:")
    for msg := range ch {
        fmt.Printf("Received: %s\\n", msg)
    }
}

func queueExample() {
    ch := make(chan string, 5)
    var wg sync.WaitGroup
    
    wg.Add(2)
    go producer(ch, &wg)
    go consumer(ch, &wg)
    wg.Wait()
}

type Counter struct {
    count int
    mu    sync.Mutex
}

func (c *Counter) Increment() {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.count++
}

func (c *Counter) GetCount() int {
    c.mu.Lock()
    defer c.mu.Unlock()
    return c.count
}

func lockExample() {
    counter := &Counter{}
    var wg sync.WaitGroup
    
    for i := 0; i < 10; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for j := 0; j < 1000; j++ {
                counter.Increment()
            }
        }()
    }
    
    wg.Wait()
    fmt.Printf("Final count: %d\\n", counter.GetCount())
}

func main() {
    fmt.Println("=== Go Concurrency Examples ===")
    
    // Goroutine example
    processWithGoroutines(5)
    fmt.Println()
    
    // Channel example
    queueExample()
    fmt.Println()
    
    // Mutex example
    lockExample()
}`
        }
      }
    }
  };

  const currentExample = codeExamples[activeTab];
  const [currentLanguage, setCurrentLanguage] = useState(Object.keys(currentExample.snippets)[0]);
  const currentSnippet = currentExample.snippets[currentLanguage];

  useEffect(() => {
    // Highlight code when language changes
    Prism.highlightAll();
  }, [currentLanguage]);

  return (
    <section id="code-showcase" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Code Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different programming patterns and algorithms across multiple languages
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(codeExamples).map(([key, example]) => (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                setCurrentLanguage(Object.keys(example.snippets)[0]);
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                activeTab === key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:shadow-md'
              }`}
            >
              {example.title}
            </button>
          ))}
        </div>

        {/* Code Display */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg ${currentSnippet.bgColor}`}>
                <span className="text-2xl">{currentSnippet.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {currentSnippet.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {currentExample.description}
                </p>
              </div>
            </div>
            
            <button
              onClick={() => handleCopy(currentSnippet.code, `${activeTab}-${currentLanguage}`)}
              className="copy-button flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-md"
            >
              {copied[`${activeTab}-${currentLanguage}`] ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600">Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Language Tabs */}
          <div className="flex border-b border-gray-200">
            {Object.entries(currentExample.snippets).map(([lang, snippet]) => (
              <button
                key={lang}
                onClick={() => setCurrentLanguage(lang)}
                className={`language-tab flex items-center space-x-2 px-6 py-3 font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                  currentLanguage === lang
                    ? `bg-white border-b-2 ${snippet.textColor} border-current shadow-sm`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="text-lg">{snippet.icon}</span>
                <span>{snippet.language}</span>
              </button>
            ))}
          </div>

          {/* Code */}
          <div className="p-6">
            <div className="code-snippet-container">
              <pre className={`bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto text-sm leading-relaxed ${getLanguageClass(currentSnippet.language)}`}>
                <code className={getLanguageClass(currentSnippet.language)}>
                  {currentSnippet.code}
                </code>
              </pre>
              {/* Line numbers overlay */}
              <div className="line-numbers">
                {currentSnippet.code.split('\n').map((_, index) => (
                  <div key={index}>
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {activeTab === 'two-sum' && (
            <>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Algorithm Complexity</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Time Complexity:</strong> O(n) - Single pass through the array</li>
                  <li>• <strong>Space Complexity:</strong> O(n) - HashMap to store complements</li>
                  <li>• <strong>Approach:</strong> Use HashMap to track seen numbers and their indices</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Insights</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• For each number, check if its complement exists in the HashMap</li>
                  <li>• If found, return the current index and the complement's index</li>
                  <li>• If not found, add the current number and its index to the HashMap</li>
                </ul>
              </div>
            </>
          )}

          {activeTab === 'strategy' && (
            <>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Strategy Pattern Benefits</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Open/Closed Principle:</strong> Open for extension, closed for modification</li>
                  <li>• <strong>Runtime Flexibility:</strong> Switch strategies at runtime</li>
                  <li>• <strong>Single Responsibility:</strong> Each strategy handles one payment method</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Use Cases</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Payment processing systems</li>
                  <li>• Sorting algorithms</li>
                  <li>• Compression algorithms</li>
                  <li>• Authentication methods</li>
                </ul>
              </div>
            </>
          )}

          {activeTab === 'factory' && (
            <>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Factory Pattern Benefits</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Encapsulation:</strong> Hide object creation complexity</li>
                  <li>• <strong>Flexibility:</strong> Easy to add new product types</li>
                  <li>• <strong>Consistency:</strong> Centralized creation logic</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Common Applications</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Database connection factories</li>
                  <li>• UI component factories</li>
                  <li>• Logger factories</li>
                  <li>• Configuration factories</li>
                </ul>
              </div>
            </>
          )}

          {activeTab === 'concurrency' && (
            <>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Python Threading</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>GIL Limitation:</strong> Global Interpreter Lock restricts true parallelism</li>
                  <li>• <strong>I/O Bound:</strong> Best for I/O operations, not CPU-intensive tasks</li>
                  <li>• <strong>Thread Safety:</strong> Requires explicit synchronization with locks</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Go Goroutines</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Lightweight:</strong> Start with just 2KB of stack space</li>
                  <li>• <strong>True Concurrency:</strong> Can run in parallel on multiple cores</li>
                  <li>• <strong>Channels:</strong> Built-in communication mechanism</li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CodeSnippetsSection;

