package main

import (
	"fmt"
	"testing"
)

func Hello() string {
	return "Hello World"
}

func TestHello(t *testing.T) {
	word := Hello()
	if word != "Hello World" {
		t.Errorf("Word does not = Hello World, got %s", word)
	}
}

func main() {
	fmt.Println(Hello())
}
